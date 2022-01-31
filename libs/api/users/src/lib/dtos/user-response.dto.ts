export interface UserResponseDto {
    id: string;
    mobId: string;
    name: string;
    isAway: boolean;
    turnEndsAt?: Date;
}
