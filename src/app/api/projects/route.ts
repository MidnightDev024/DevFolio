import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';
import localProjects from '@/app/data/projects';

export const dynamic = 'force-dynamic';

export async function GET() {
  await dbConnect();
  try {
    const projects = await Project.find({}).lean();
    const localProjectList = localProjects as any[];
    const existingKeys = new Set(
      projects.map((project: any) => `${project.title}::${project.mainImage}`)
    );

    const missingLocalProjects = localProjectList
      .filter((project) => !existingKeys.has(`${project.title}::${project.mainImage}`))
      .map((project) => ({
        ...project,
        _id: String(project.id ?? project.title),
      }));

    return NextResponse.json({
      success: true,
      data: [...projects, ...missingLocalProjects],
    }, { status: 200 });
  } catch (error) {
    console.error('API Find Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}