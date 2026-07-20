import { Menu, Search, UserRound } from "lucide-react";

export function Header() {
    return (
        <header className="header">
            <button type="button" className="header__button" aria-label="메뉴">
                <Menu size={30} strokeWidth={1.8} />
            </button>

            <div className="header__logo" aria-label="Data Lab">
                <span className="header__logo-symbol">b</span>
                <span className="header__logo-label">Data Lab</span>
            </div>

            <div className="header__actions">
                <button type="button" className="header__button" aria-label="검색">
                    <Search size={28} strokeWidth={1.8} />
                </button>

                <button type="button" className="header__button" aria-label="사용자">
                    <UserRound size={29} strokeWidth={1.8} />
                </button>
            </div>
        </header>
    );
}