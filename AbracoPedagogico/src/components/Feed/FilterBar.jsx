import { DISCIPLINES, LEVELS, REGIONS } from "../../data/mockData";

function FilterBar({ filters, onFilterChange }) {
    return (
        <div className="filter-bar">
            <h3>Filtrar por:</h3>

            <div className="filter-group">
                <label>Disciplina</label>
                <select
                    value={filters.discipline}
                    onChange={(e) => onFilterChange("discipline", e.target.value)}
                >
                    <option value="">Todas</option>
                    {DISCIPLINES.map((d) => (
                        <option key={d} value={d}>
                            {d}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label>Nível</label>
                <select
                    value={filters.level}
                    onChange={(e) => onFilterChange("level", e.target.value)}
                >
                    <option value="">Todos</option>
                    {LEVELS.map((l) => (
                        <option key={l} value={l}>
                            {l}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label>Região</label>
                <select
                    value={filters.region}
                    onChange={(e) => onFilterChange("region", e.target.value)}
                >
                    <option value="">Todas</option>
                    {REGIONS.map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FilterBar;
