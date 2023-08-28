import Logo from "./png/logo.png";

export default function LogoAsset({ large }) {
    return (
        <div
            className={`${large ? "w-40" : ""} flex justify-center items-start`}
        >
            <img src={Logo} alt="logo" />
        </div>
    );
}
