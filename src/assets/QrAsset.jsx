import { BsQrCode } from "react-icons/bs";

export default function QrAsset({ isSelected }) {
    return (
        <div>
            {isSelected ? <BsQrCode size="24" /> : <BsQrCode size="24" />}
        </div>
    );
}
