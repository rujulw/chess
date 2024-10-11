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
    const [to, setTo] = useState<null | Square>(null);
    return <div     className="text-white-200">
    {board.map((row, i) => {
        return <div key={i} className="flex">
            {row.map((square, j) => {
                const specificSquare = String.fromCharCode(97 + (j % 8)) + "" + (8- Math.floor(i)) as Square;
                return <div onClick={() => {
                    if(!from){
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
                        }))
                        setFrom(null)
                        chess.move({
                            from,
                            to: specificSquare
                        });
                        setBoard(chess.board());
                    }
                }} key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-purple-500' : 'bg-white'}`}>
                    <div className="w-full justify-center flex h-full">
                        <div className="h=full justify-center flex flex-col">
                        {square ? square.type : ""}
                        </div>
                    
                    </div>
                    
                </div>
            })}
        </div>
    })}
    </div>
}