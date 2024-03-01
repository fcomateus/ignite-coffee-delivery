import { Banner } from "./components/Banner"
import { CoffeeList } from "./components/CoffeeList"

export function Home() {
    return (
        <>
            <Banner />
            <h2>Nossos Cafés</h2>
            <CoffeeList />
        </>
    )
}