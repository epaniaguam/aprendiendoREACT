export function Square({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };
  // console.log('Select', isSelected, ' > ', index)
  // console.log('children', children)
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}
