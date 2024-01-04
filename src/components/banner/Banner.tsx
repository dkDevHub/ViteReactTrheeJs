import classes from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={classes.banner + " select-none pointer-events-none"}>
            <h1 className={classes.text + " w-fit text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-purple-400 from-pink-400"}>
                Vite + React + R3F + Shadcn/ui
            </h1>
            <h1 className={"mt-16 text-white w-fit text-6xl font-extrabold"}>
                Lorem ipsum dolor sit amet.
            </h1>
            <h1 className={"text-slate-200 max-w-screen-md text-5xl font-extrabold"}>
                Consectetur adipisicing elit. Aspernatur eligendi cupiditate obcaecati quam id, officiis nesciunt ullam quis quod non.
            </h1>
        </div>
    )
};

export default Banner;