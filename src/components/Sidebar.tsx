import {Link} from 'react-router-dom';
import {categories} from '../utils/constants'
import { useLocation } from 'react-router-dom';
import {useEffect} from "react";

const Sidebar = ({selected, setSelected}:any) => {
    const location = useLocation()
    const activeClass = 'bg-[#188653] border-r-2 border-green-500';
    useEffect(() => {
        console.log(location.pathname)
    }, [location.pathname])

    return(
        <div className='p-2'>
            {categories.map((category, index) => (
                <div key={index}>
                    {category.link ?
                        <Link to={category.link}>
                            <button onClick={() => setSelected(category)}
                                    className={`p-2 w-full  text-left hover:bg-[#188653] text-green-100 ${category.link === location.pathname && activeClass}`}
                            >
                                <span>{category.name}</span>
                            </button>
                        </Link>
                        :
                        <>
                            <button onClick={() => setSelected(category)}
                                    className={`p-2 w-full text-left hover:bg-[#188653] text-green-100 ${category.name === selected.name }`}
                            >
                                <span>{category.name}</span>
                            </button>
                            {category.category === selected.category && category.dropdown &&
                                category.dropdown.map((c, i) => (
                                    <Link key={i} to={c.link}>
                                        <button key={i}
                                                onClick={() => setSelected(c)}
                                                className={`p-2 w-full text-left hover:bg-[#188653] text-green-100 ${c.link === location.pathname && activeClass}`}
                                        >
                                            <span className="pl-4">{c.name}</span>
                                        </button>
                                    </Link>
                                ))
                            }
                        </>
                    }
                </div>
            ))}
        </div>
    )
}

export default Sidebar;