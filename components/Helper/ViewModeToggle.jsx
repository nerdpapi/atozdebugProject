export default function ViewModeToggleTabs({ selected= 'desktop', onChange }) {
    return (
      <div className="flex space-x-9 bg-white border border-gray-400 p-1 rounded-sm w-fit">
        {['desktop', 'mobile'].map((mode) => (
          <button
            key={mode}
            onClick={() => onChange(mode)}
            className={`px-10 py-1.5 rounded-sm text-sm capitalize transition-all duration-200 ${
              selected === mode
                ? 'bg-red-100 text-red-400'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
    );
  }
  