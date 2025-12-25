const LinkCom01p = ({ link, p, name }) => {
    return (
        <>
            <div>
                <a className="text-2xl text-blue-300 " href={link}>{name}
                </a>
                <p>{p}</p>
            </div>

        </>
    )

}
export default LinkCom01p