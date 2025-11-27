import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';

export async function GET() {
  await dbConnect();
  try {
    const projects = await Project.find({}).lean();
    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    console.error('API Find Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}