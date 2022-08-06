import styled from "styled-components";

export const Img = styled.img`
    width: 130px;
    height: 130px;
    border-radius:${p => p.theme.radii.round} ;
    
`;
export const Name = styled.p`
    font-size: ${p=>p.theme.fontSizes.mt};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[3]}px;
`;  

export const Tag = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};
    margin-bottom: ${p => p.theme.space[3]}px;
    opacity: ${p => p.theme.opacities.s};
`;  
export const Location = styled.p`
    font-size: ${p=>p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};    
    opacity: ${p=>p.theme.opacities.s};
`;  
export const List = styled.li`   
    display: flex;
    flex-direction: column;
    justify-content:center;    
    align-items: center;    
    
    font-size:${p=>p.theme.fontSizes.s};
    background-color:${p=>p.theme.colors.secondary};
    
    height: 80px;
    width: 100%;    
    padding: ${p => p.theme.space[3]}px;;
    
    &:nth-child(2n){       
        border-left: ${p => p.theme.borders.normal};
        border-right: ${p => p.theme.borders.normal};
    }
`;
export const Label = styled.span`
    font-family:${p => p.theme.fonts.monospace};
    font-weight:${p => p.theme.lineHeights.heading};
    opacity: ${p=>p.theme.opacities.m};
`;
export const Quantity = styled.span`
    font-weight:${p => p.theme.fontWeights.bold};
    font-size:${p=>p.theme.fontSizes.m}; 
`;