export default function Container({children}) {
    return (
        <>
            <header>PostList 🐻</header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    )
}