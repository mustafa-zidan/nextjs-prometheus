'use client';

import { useState } from "react";

const MetricTracker = () => {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState<number | null>(null);
    const [isTracking, setIsTracking] = useState(false);

    const handleStart = () => {
        setStartTime(Date.now());
        setElapsedTime(null);
        setIsTracking(true);
    };

    const handleStop = () => {
        if (startTime) {
            const endTime = Date.now();
            setElapsedTime((endTime - startTime) / 1000); // Convert to seconds
        }
        setIsTracking(false);
    };

    const sendMetric = async () => {
        if (elapsedTime === null) {
            alert("Please start and stop tracking before sending.");
            return;
        }

        await fetch("/api/record-metric", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "label_1": "value_1",
                "label_2": "value_2",
                "label_3": "value_3",
                "label_4": "value_4",
                "label_5": "value_5",
                "label_6": "value_6",
                "value": elapsedTime,
            }),
        });

        alert("Metric sent!");
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-2">Metric Tracker</h3>
            <p className="mb-4">Elapsed Time: {elapsedTime ? `${elapsedTime} seconds` : "Not recorded yet"}</p>
            <button
                onClick={handleStart}
                disabled={isTracking}
                className={`px-4 py-2 mr-2 text-white rounded ${isTracking ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
            >
                Start Tracking
            </button>
            <button
                onClick={handleStop}
                disabled={!isTracking}
                className={`px-4 py-2 mr-2 text-white rounded ${!isTracking ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-700'}`}
            >
                Stop Tracking
            </button>
            <button
                onClick={sendMetric}
                disabled={elapsedTime === null}
                className={`px-4 py-2 text-white rounded ${elapsedTime === null ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700'}`}
            >
                Send Metric
            </button>
        </div>
    );
};

export default MetricTracker;