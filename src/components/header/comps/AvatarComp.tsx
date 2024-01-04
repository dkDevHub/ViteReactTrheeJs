import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AvatarComp = () => {
    return (
        <Avatar className="invert dark:invert-0">
            <AvatarImage src="./src/assets/logo180.png" />
            <AvatarFallback>dk</AvatarFallback>
        </Avatar>
    )
};

export default AvatarComp;
