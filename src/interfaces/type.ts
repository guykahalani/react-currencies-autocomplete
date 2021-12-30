export interface CurrenciesData {
    id: string,
    name: string,
    min_size: string
}

export interface CurrenciesDataModel {
    data: CurrenciesData[]
}

export interface AutoCompleteProps {
    currencies: Array<CurrenciesData>
}

export interface SearchState {
    text: string,
    suggestions: CurrenciesData[]
}