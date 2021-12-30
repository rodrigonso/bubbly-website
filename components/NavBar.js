import Image from "next/image";
import logo from '../public/logo.png'
import styles from '../styles/NavBar.module.scss';
import Router from 'next/router';
import { useState } from "react";

export default function NavBar() {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const menuItems = [
        { title: 'Home', path: '/' },
        { title: 'Why bubbly', path: '/why-bubbly' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contact' }
    ];

    const useSelectedStyle = (idx) => idx === selectedIdx ? styles.selected : {};

    const handleMenuItemClick = (item, idx) => {
        setSelectedIdx(idx);

        Router.push(item.path);
    };


    return (
        <div className={styles.menu}>
            <div style={{ width: 100, marginRight: 80 }}>
                <Image src={logo} layout="intrinsic" />
            </div>
            {menuItems.map((item, i) => (
                <div key={i} className={styles.menuitem}>
                    <div className={useSelectedStyle(i)} onClick={() => handleMenuItemClick(item, i)}>
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
