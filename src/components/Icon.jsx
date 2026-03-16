import { DynamicIcon } from 'lucide-react/dynamic';

export default function Icon({ name = "circle-question-mark", size = 24, className = "", color = "white", onClick = () => {} }) {
  return (
    <DynamicIcon name={name} color={color} size={size} className={className} onClick={onClick} />
  )
}