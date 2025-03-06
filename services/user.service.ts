/**
 * 
 * @description 사용자 생성
 * @param userData 
 * @returns 
 */

export const createUser = async (userData: any) => {
    // 예제
    return { id: 1, name: userData.name, email: userData.email };
};

/**
 * 
 * @description 사용자 목록 조회
 * @returns 
 */
export const getUsers = async() => {
    return [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob.example.com" }
    ];
};