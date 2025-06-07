const FilterOptions = ({ selected, onChange }) => {
  const options = ['All', 'Conclave', 'Press Release', 'Media Mentions'];

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: selected === opt ? '2px solid #3b82f6' : '2px solid #e2e8f0',
            backgroundColor: selected === opt ? '#dbeafe' : 'white',
            color: selected === opt ? '#1e40af' : '#64748b',
            fontWeight: selected === opt ? '600' : '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontSize: '0.9rem',
            outline: 'none',
            boxShadow: selected === opt ? '0 2px 4px rgba(59, 130, 246, 0.2)' : 'none'
          }}
          onMouseOver={(e) => {
            if (selected !== opt) {
              e.target.style.backgroundColor = '#f0f8ff';
              e.target.style.color = '#3b82f6';
            }
          }}
          onMouseOut={(e) => {
            if (selected !== opt) {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#64748b';
            }
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;