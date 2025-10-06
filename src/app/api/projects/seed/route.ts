import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';
import localProjects from '@/app/data/projects';

export async function POST() {
  await dbConnect();
  try {
    const docs = (localProjects as any[]).map((p) => ({
      title: p.title,
      description: p.description,
      mainImage: p.mainImage,
      components: p.components,
    }));

    await Project.deleteMany({});
    const inserted = await Project.insertMany(docs);
    return NextResponse.json({ success: true, count: inserted.length, data: inserted }, { status: 201 });
  } catch (error) {
    console.error('Seed Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}


