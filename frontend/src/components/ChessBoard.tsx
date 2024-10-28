import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";

export const ChessBoard = ({ chess, board, socket, setBoard }: {
    chess: any;
    setBoard: any;
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]
    socket: WebSocket;
}) => {
    const [from, setFrom] = useState<null | Square>(null);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-black p-6 rounded-lg shadow-lg">
                {board.map((row, i) => {
                    return (
                        <div key={i} className="flex">
                            {row.map((square, j) => {
                                const specificSquare = String.fromCharCode(97 + (j % 8)) + "" + (8 - Math.floor(i)) as Square;
                                return (
                                    <div
                                        onClick={() => {
                                            if (!from) {
                                                setFrom(specificSquare);
                                            } else {
                                                socket.send(JSON.stringify({
                                                    type: "move",
                                                    payload: {
                                                        move: {
                                                            from,
                                                            to: specificSquare
                                                        }
                                                    }
                                                }));
                                                setFrom(null);
                                                chess.move({
                                                    from,
                                                    to: specificSquare
                                                });
                                                setBoard(chess.board());
                                            }
                                        }}
                                        key={j}
                                        className={`w-20 h-20 ${(i + j) % 2 === 0 ? 'bg-purple-500' : 'bg-white'} flex items-center justify-center cursor-pointer`}
                                    >
                                        <div className="text-3xl">
                                            {square ? square.type.toUpperCase() : ""}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}