import React, { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FeedbackBoard = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [category, setCategory] = useState('learning'); // learning, benefit, suggestion

    const categories = {
        learning: { name: 'Key Learnings', color: 'bg-yellow-100' },
        benefit: { name: 'Benefits & Use Cases', color: 'bg-green-100' },
        suggestion: { name: 'Questions & Suggestions', color: 'bg-pink-100' },
    };

    const addNote = () => {
        if (newNote.trim()) {
            setNotes([
                ...notes,
                {
                    id: Date.now(),
                    text: newNote,
                    category,
                    timestamp: new Date().toLocaleTimeString(),
                },
            ]);
            setNewNote('');
        }
    };

    const removeNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Demo Feedback Board</h2>

            {/* Input Section */}
            <div className="mb-6 space-y-4">
                <div className="flex space-x-4">
                    <select
                        className="p-2 border rounded-md flex-grow"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {Object.entries(categories).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={addNote}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
                    >
                        <PlusIcon className="h-5 w-5 mr-1" />
                        Add Note
                    </button>
                </div>
                <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Share your thoughts, learnings, or suggestions..."
                    className="w-full p-3 border rounded-md"
                    rows="3"
                />
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(categories).map(([key, value]) => (
                    <div key={key} className="space-y-4">
                        <h3 className="font-semibold text-lg">{value.name}</h3>
                        <div className="space-y-2">
                            {notes
                                .filter((note) => note.category === key)
                                .map((note) => (
                                    <div
                                        key={note.id}
                                        className={`${value.color} p-3 rounded-lg relative group`}
                                    >
                                        <button
                                            onClick={() => removeNote(note.id)}
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                                        </button>
                                        <p className="text-gray-800">
                                            {note.text}
                                        </p>
                                        <span className="text-xs text-gray-500 mt-2 block">
                                            {note.timestamp}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackBoard;
