"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card"; // Make sure this path is correct

interface Candidate {
  name: string;
  votes: number;
}

export default function Home() {
  const [data, setData] = useState<Candidate[]>([]);

  // Fetch initial candidate data
  useEffect(() => {
    axios
      .get("http://localhost:5000/candidates")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Failed to fetch candidates:", err);
      });
  }, []);

  const handleVote = (name: string) => {
    axios
      .post("http://localhost:5000/vote", { name })
      .then(() => {
        setData((prevData) =>
          prevData.map((candidate) =>
            candidate.name === name
              ? { ...candidate, votes: candidate.votes + 1 }
              : candidate
          )
        );
      })
      .catch((err) => {
        console.error("Voting failed:", err);
        alert("Voting failed. Please try again.");
      });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((candidate) => (
          <Card
            key={candidate.name}
            name={candidate.name}
            votes={candidate.votes}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
}
