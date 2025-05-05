export default function ViewModeToggleTabs({ selected= 'desktop', onChange }) {
    return (
      <div className="flex space-x-1 bg-white border border-gray-400 p-1 rounded-sm w-fit">
        {['desktop', 'mobile'].map((mode) => (
          <button
            key={mode}
            onClick={() => onChange(mode)}
            className={`lg:px-8 p-2  py-1.5 rounded-sm text-sm capitalize transition-all duration-200 ${
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
  