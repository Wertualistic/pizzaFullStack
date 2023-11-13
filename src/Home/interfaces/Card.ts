interface Info extends sign {
    img: string,
    title: string,
    price: number,
    available: number
}

interface sign {
    [index: string]: string | number;
}