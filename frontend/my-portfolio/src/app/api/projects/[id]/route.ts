import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';

type Params = { params: { id: string } };

export async function GET(request: Request, { params }: Params) {
  await dbConnect();
  try {
    const project = await Project.findById(params.id);
    if (!project) {
      return NextResponse.json({ success: false, error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    console.error('API Get By Id Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  await dbConnect();
  try {
    const body = await request.json();
    const updated = await Project.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error('API Update Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  await dbConnect();
  try {
    const deleted = await Project.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json({ success: true }, { status: 204 });
  } catch (error) {
    console.error('API Delete Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}


