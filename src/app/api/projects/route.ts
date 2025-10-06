import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';
import localProjects from '@/app/data/projects';

export async function GET(request: Request) {
  await dbConnect();

  try {
    let projects = await Project.find({});

    if (projects.length === 0 && process.env.NODE_ENV !== 'production') {
      const docs = (localProjects as any[]).map((p) => ({
        title: p.title,
        description: p.description,
        mainImage: p.mainImage,
        components: p.components,
      }));
      if (docs.length > 0) {
        await Project.insertMany(docs);
        projects = await Project.find({});
      }
    }

    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    console.error("API Find Error:", error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { title, description, mainImage, components } = body ?? {};

    if (!title || !description || !mainImage) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const created = await Project.create({ title, description, mainImage, components });
    return NextResponse.json({ success: true, data: created }, { status: 201 });
  } catch (error) {
    console.error('API Create Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}