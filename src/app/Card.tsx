interface CardProps {
  name: string;
  votes: number;
  onVote: (name: string) => void;
}

export const Card = ({ name, votes, onVote }: CardProps) => {
  return (
    <div className="bg-blue-300 text-black p-5 text-center rounded shadow">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <div>
        <h2 className="text-lg">Votes:</h2>
        <p className="text-2xl font-semibold mb-3">{votes}</p>
        <button
          onClick={() => onVote(name)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Vote!
        </button>
      </div>
    </div>
  );
};
