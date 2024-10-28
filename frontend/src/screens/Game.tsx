import { useEffect, useState } from "react";
import { ChessBoard } from "../components/ChessBoard";
import { GameMenu } from "../components/GameMenu"; // Import the new GameMenu
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";

const INIT_GAME = "init_game";
const MOVE = "move";
const GAME_OVER = "game_over";

export const Game = () => {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());

    useEffect(() => {
        if (!socket) {
            return;
        }
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);

            switch (message.type) {
                case INIT_GAME:
                    setBoard(chess.board());
                    console.log("Game initialized");
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Move made");
                    break;
                case GAME_OVER:
                    console.log("Game over");
                    break;
            }
        };
    }, [socket]);

    if (!socket) return <div>Connecting...</div>;

    const handlePlay = () => {
        socket.send(JSON.stringify({
            type: INIT_GAME
        }));
    };

    return (
        <div className="justify-center flex">
            <div className="pt-8 max-w-screen-lg w-full">
                <div className="grid grid-cols-6 gap-4 w-full">
                    {/* Chessboard Section */}
                    <div className="col-span-4 w-full flex justify-center">
                        <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board} />
                    </div>

                    {/* Right Section with Game Menu */}
                    <div className="col-span-2 w-full flex flex-col items-center justify-center">
                        <GameMenu 
                            title="PLAY CHESS" 
                            subtitle="" 
                            onPlay={handlePlay} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};