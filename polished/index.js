import { lighten, modularScale } from 'polished';

const styles = {
            color: lighten(0.2, '#000'),
            "font-size": modularScale(1),
            [hiDPI(1.5)]: {
                "font-size": modularScale(1.25)
            }
        };