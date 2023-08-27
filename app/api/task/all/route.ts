import Task from "@models/tasks";
import { connectToDB } from "@utils/database";
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
    try {
        console.log("Attempting to connect to DB..."); // Log before connecting to DB
        await connectToDB();
        console.log("Connected to DB successfully!"); // Log after successful connection

        console.log("Attempting to fetch tasks..."); // Log before fetching tasks
        const tasks = await Task.find({});
        console.log("Fetched tasks successfully!", tasks); // Log fetched tasks

        return NextResponse.json(
            tasks,
            { status: 200 }
        );
    } catch (error) {
        console.error("Error occurred:", error); // Log the error with console.error for better visibility
        return NextResponse.json(
            "Failed to fetch all tasks",
            { status: 500 }
        );
    }
}