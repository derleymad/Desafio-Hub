import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 105px;
    left: 75px;
    background-color: #daaaff;
    color: #fff;
    width: 154px;
    height: 77px;
    border-radius: 12px;
    text-align: left;
    padding: 11px;
    overflow: hidden;

    small {
        font-size: 15px;
    }
    div{
        display: flex;
        align-items: center;

        span{
            font-size: 20px;
            font-weight: 400;
            margin-right: 5px;
        }
    }

    i{
        width: 154px;
        height: 77px;
        position: absolute;
        border-radius: 50px;

        &.circle1{
            left: 104px;
            top: -20px;
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            );
        }

        &.circle2{
            left: 81px;
            bottom: -50px;
            transform: rotate(45deg);
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            );
        }

        &.circle3{

            border: 2px solid rgba(255,255,255,0.3);
            transform: rotate(-72deg);
            top: -54px;
            left: 47px;

        }


`;