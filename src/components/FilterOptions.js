const FilterOptions = ({ selected, onChange }) => {
  const options = ['All', 'Conclave', 'Press Release', 'Media Mentions'];

  return (
    <div>
      {options.map((opt) => (
        <button
          key={opt}
          style={{ fontWeight: selected === opt ? 'bold' : 'normal' }}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;
