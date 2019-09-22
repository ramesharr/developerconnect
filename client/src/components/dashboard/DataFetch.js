import axios from "axios";

const DataFetch = async searchTerm => {
    const response = await axios.get(
        "https://watershedlrs.com/api/organizations/8501/query/export?type=json",
        {
            auth: {
                username: "fe7a7ba02d586c",
                password: "b79def2fd1f9ed"
            }
        }
    );
    return response;
};

export default DataFetch;
