import { House } from "lucide-react";
import Icon from "../components/Icon";

export default function Header() {
    return (
        <div className='flex justify-center items-center'>
            <div className='py-3 px-5 bg-[#4240425C] flex gap-5 rounded-sm'>

                <Icon name="house" size={20} className="cursor-pointer" />
                <Icon name="folder" size={20} className="cursor-pointer" />
                <Icon name="briefcase" size={20} className="cursor-pointer" />
                <Icon name="wrench" size={20} className="cursor-pointer" />
                <Icon name="square-pen" size={20} className="cursor-pointer" />
            </div>
        </div>
    )
}
