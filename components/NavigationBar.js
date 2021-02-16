import Link from "next/link";
import react from "react";


const NavigationBar = (props) =>{
    return(
        <div>
            <p>aaa</p>
            <ui>
                <li>
                    <Link href="/">
                        <a>Top</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about-me">
                        <a>About me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/archives">
                        <a>Archives</a>
                    </Link>
                </li>
            </ui>



        </div>
    )
}

export default NavigationBar;