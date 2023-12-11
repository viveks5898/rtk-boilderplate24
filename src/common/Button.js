export default function Button({ children,className, ...attributes }) {
    return (
      <button
        type="button"
        className={`border border-gray-800 px-4 py-2 rounded uppercase ${className} `}
        {...attributes}
      >
        {children}
      </button>
    );
  }