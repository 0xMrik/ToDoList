import Task from "@models/tasks";
import { connectToDB } from "@utils/database";
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
    try {
        console.log("Attempting to parse request body..."); // Log 1
        const { task } = await request.json();
        console.log("Parsed request body:", task); // Log 2

        console.log("Attempting to connect to DB..."); // Log 3
        await connectToDB();
        console.log("Connected to DB successfully!"); // Log 4

        console.log("Attempting to create new task..."); // Log 5
        const newTask = new Task({ task });
        await newTask.save();
        console.log("New task created successfully!", newTask); // Log 6

        return NextResponse.json(
            newTask,
            { status: 201 },
        );
    } catch (error) {
        console.error("An error occurred:", error); // Error log
        return NextResponse.json(
            "Failed to create a new task",
            { status: 500 }
        );
    }
}