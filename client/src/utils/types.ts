export interface NavbarItemProps {
    title: string,
    classProps: any,
}

export interface TransactionsCardProps {
    addressTo: string,
    addressFrom: string,
    timestamp: Date,
    message: string,
    keyword: string,
    amount: number,
    url: string
}

export interface InputProps {
    placeholder: any,
    name: any,
    type: any,
    value: any,
    handleChange: any
}

export interface ServiceCardProps {
    color: string,
    title: string,
    icon: any,
    subtitle: string,
}

export interface TransactionProviderProps {
    children: Symbol,
}

export interface useFetchProps {
    keyword: string
}
