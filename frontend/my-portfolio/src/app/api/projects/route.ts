import { NextResponse } from 'next/server';
// --- FIX: Use relative paths instead of aliases ---
import dbConnect from '../../../lib/dbConnect';
import Project from '../../../models/Project';
// -------------------------------------------

export async function GET(request: Request) {
  try {
    await dbConnect(); // Connect to the database

    // Find all documents in the Project collection
    const projects = await Project.find({});

    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    // Log the error to the console for debugging
    console.error("API Error:", error); 
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}