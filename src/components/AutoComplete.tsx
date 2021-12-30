import { ChangeEvent, FC, useState } from "react";
import { AutoCompleteProps, CurrenciesData, SearchState } from "../interfaces/type";

export const AutoComplete: FC<AutoCompleteProps> = ({ currencies }): JSX.Element => {

    const [search, setSearch] = useState<SearchState>({ text: "", suggestions: [] });
    const [isSuggetionsVisible, setIsSuggestionsVisible] = useState<Boolean>(true);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let suggestions: CurrenciesData[] = [];
        if (value.length > 0) {
            // Match currency id or name with case-insensitive regex
            const regex = new RegExp(`^${value}`, "i");
            suggestions = currencies.sort().filter((currency: CurrenciesData) => regex.test(currency.id) || regex.test(currency.name));
        }
        setIsSuggestionsVisible(true);
        setSearch({ text: value, suggestions });
    }

    const selectSuggestion = (value: CurrenciesData) => {
        setIsSuggestionsVisible(false); // Hide suggestions box on select
        setSearch({ text: value.id, suggestions: [] }); // Update input with selected value and clear suggestions
    }

    const { suggestions } = search; // Destructure suggestions array from search state for rendering 

    return (
        <div className="autocomplete">
            <div className="backdrop" onClick={() => setIsSuggestionsVisible(false)} style={{ display: isSuggetionsVisible ? "block" : "none" }}></div>
            <div className="container">
                <input
                    id="input"
                    type="text"
                    autoComplete="off"
                    value={search.text}
                    onChange={handleInputChange}
                    placeholder="Start typing... example: USD or US Dollar"
                />
                {suggestions.length > 0 && isSuggetionsVisible && (
                    <ul className="autocomplete-list">
                        {suggestions.map((currency: CurrenciesData) => (
                            <li className="autocomplete-item" key={currency.id}>
                                <button
                                    className="autocomplete-button"
                                    key={currency.id}
                                    onClick={() => selectSuggestion(currency)}
                                >
                                    {currency.id} - {currency.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}