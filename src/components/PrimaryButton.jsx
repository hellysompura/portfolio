export default function PrimaryButton({
  text = "Submit",
  onClick = () => {},
  width = "w-full",
}) {
  return (
    <div>
      <button
        className={`px-6 py-2 bg-(--orange) text-(--black) font-semibold hover:bg-(--orange-50) transition-colors cursor-pointer ${width}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
