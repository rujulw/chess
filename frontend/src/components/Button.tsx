
export const Button = ({ onClick, children }: {onClick: () => void, children: React.ReactNode }) => {
    return  <button onClick={onClick}className="px-10 py-4 bg-purple-600 hover:bg-purple-500 transition duration-300 rounded-full text-lg md:text-xl font-semibold shadow-lg transform hover:scale-105"
  >
    {children}
  </button>
}