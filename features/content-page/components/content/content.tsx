/* eslint-disable @next/next/no-img-element */

import styles from "./content.module.scss"; 

interface HeroProps {
    image: string;
    title: string;
    subtitle: string;

}

export function Content({image, title, subtitle}: HeroProps) {

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const fullImageUrl = image ? `${baseUrl}/${image.src}` : '';
    console.log(image);
    console.log(fullImageUrl);


    return(
        <div className={styles.container}>
            <h1 className = {styles.title}>{title}</h1>
            <p className = {styles.desc}>
                {subtitle}
            </p>
            <img className = {styles.imgContent} src={fullImageUrl} alt="Issues Image"/>
        </div>
    )
}