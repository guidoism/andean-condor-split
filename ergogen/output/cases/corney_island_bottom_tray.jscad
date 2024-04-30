function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[85.5722741,-54.0727436],[90.5584445,-111.0416045]]).appendArc([91.0930831,-111.4966717],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([111.4198795,-110.0070931]).appendArc([111.8778052,-109.4342622],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([110.1646491,-98.0128759]).appendArc([110.6741109,-97.4389327],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.7273657,-98.4605303]).appendArc([145.2061596,-98.8817287],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.0644707,-116.8437294]).appendArc([148.4256172,-117.2472381],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.0339285,-122.367114]).appendArc([167.1592374,-122.4208748],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.2002623,-132.6834733]).appendArc([184.3039187,-132.7664849],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([197.5333969,-146.6201681]).appendArc([198.2485562,-146.6284084],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([212.9846605,-131.8923042]).appendArc([213.0151085,-131.2185275],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([188.4299454,-101.7367799]).appendArc([188.8490929,-100.9177935],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([204.8930329,-102.0483519]).appendArc([205.3611916,-101.7995887],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.1674451,-100.4031167]).appendPoint([206.1674451,-44.0645904]).appendArc([205.6674451,-43.5645904],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.9165795,-43.5645904]).appendArc([185.4165795,-43.0648124],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([185.416445,-42.7619465]).appendPoint([185.4160169,-41.798018]).appendArc([184.9085177,-41.2982962],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.9239442,-41.5680648]).appendArc([166.416445,-41.068121],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([166.416445,-39.6097851]).appendArc([165.9218394,-39.1098142],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.9110506,-38.9154872]).appendArc([147.416445,-38.4155163],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([147.416445,-33.6425903]).appendArc([146.916445,-33.1425903],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.014445,-33.1425903]).appendArc([126.514445,-33.6425903],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.514445,-37.4012499]).appendArc([126.0161555,-37.901247],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([108.0127345,-37.9628377]).appendArc([107.514445,-38.4628348],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([107.514445,-50.3609674]).appendArc([107.0550376,-50.8593169],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([85.946445,-52.5786949]).appendArc([85.4889417,-53.12064],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85.5722741,-54.0727436]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91.6722068,-110.0038917],[86.767704,-53.9681142]]).appendPoint([86.7457744,-53.7175606]).appendPoint([108.2550375,-51.9655464]).appendArc([108.714445,-51.4671969],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.714445,-39.1604442]).appendPoint([127.2161555,-39.0971488]).appendArc([127.714445,-38.5971517],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.714445,-34.3425903]).appendPoint([146.216445,-34.3425903]).appendPoint([146.216445,-39.6026388]).appendArc([146.7110506,-40.1026097],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([165.216445,-40.3022732]).appendPoint([165.216445,-42.286256]).appendArc([165.7239442,-42.7861998],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.2163324,-42.508814]).appendPoint([184.2164451,-42.7624794]).appendPoint([184.2171122,-44.2648124]).appendArc([184.7171122,-44.7645904],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.9674451,-44.7645904]).appendPoint([204.9674451,-100.0815777]).appendPoint([204.5407961,-100.8205554]).appendPoint([186.1232457,-99.5227373]).appendArc([185.7040981,-100.3417237],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([211.6839594,-131.4959489]).appendPoint([197.9065423,-145.2733661]).appendPoint([185.0607323,-131.8214535]).appendArc([184.9570759,-131.7384419],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.6368251,-121.3076855]).appendArc([167.5115162,-121.2539247],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([149.1786991,-116.209848]).appendPoint([149.1533918,-116.0508134]).appendPoint([146.2351273,-97.7120579]).appendArc([145.7563335,-97.2908596],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.2743124,-96.1963989]).appendArc([108.7648506,-96.7703422],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([110.5390635,-108.5987861]).appendPoint([110.579068,-108.8654912]).appendPoint([91.6936983,-110.24944]).appendPoint([91.6722068,-110.0038917]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[190.6634451,-73.0995904],[198.6634451,-73.0995904]]).appendPoint([198.6634451,-30.1995904]).appendPoint([190.6634451,-30.1995904]).appendPoint([190.6634451,-73.0995904]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_pinky_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[85.5722741,-54.0727436],[90.5584445,-111.0416045]]).appendArc([91.0930831,-111.4966717],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([111.4198795,-110.0070931]).appendArc([111.8778052,-109.4342622],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([110.1646491,-98.0128759]).appendArc([110.6741109,-97.4389327],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.7273657,-98.4605303]).appendArc([145.2061596,-98.8817287],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.0644707,-116.8437294]).appendArc([148.4256172,-117.2472381],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.0339285,-122.367114]).appendArc([167.1592374,-122.4208748],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.2002623,-132.6834733]).appendArc([184.3039187,-132.7664849],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([197.5333969,-146.6201681]).appendArc([198.2485562,-146.6284084],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([212.9846605,-131.8923042]).appendArc([213.0151085,-131.2185275],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([188.4299454,-101.7367799]).appendArc([188.8490929,-100.9177935],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([204.8930329,-102.0483519]).appendArc([205.3611916,-101.7995887],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.1674451,-100.4031167]).appendPoint([206.1674451,-44.0645904]).appendArc([205.6674451,-43.5645904],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.9165795,-43.5645904]).appendArc([185.4165795,-43.0648124],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([185.416445,-42.7619465]).appendPoint([185.4160169,-41.798018]).appendArc([184.9085177,-41.2982962],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.9239442,-41.5680648]).appendArc([166.416445,-41.068121],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([166.416445,-39.6097851]).appendArc([165.9218394,-39.1098142],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.9110506,-38.9154872]).appendArc([147.416445,-38.4155163],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([147.416445,-33.6425903]).appendArc([146.916445,-33.1425903],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.014445,-33.1425903]).appendArc([126.514445,-33.6425903],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.514445,-37.4012499]).appendArc([126.0161555,-37.901247],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([108.0127345,-37.9628377]).appendArc([107.514445,-38.4628348],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([107.514445,-50.3609674]).appendArc([107.0550376,-50.8593169],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([85.946445,-52.5786949]).appendArc([85.4889417,-53.12064],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85.5722741,-54.0727436]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[189.8298246,-123.3510864],"radius":1.1})
.union(
    CAG.circle({"center":[150.1570461,-99.4324716],"radius":1.1})
).union(
    CAG.circle({"center":[165.3524451,-60.0105904],"radius":1.1})
).union(
    CAG.circle({"center":[108.384445,-76.9195904],"radius":1.1})
).union(
    CAG.circle({"center":[107.384445,-57.9195904],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function corney_island_bottom_tray_case_fn() {
                    

                // creating part 0 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_0_bounds = corney_island_bottom_tray__part_0.getBounds();
                let corney_island_bottom_tray__part_0_x = corney_island_bottom_tray__part_0_bounds[0].x + (corney_island_bottom_tray__part_0_bounds[1].x - corney_island_bottom_tray__part_0_bounds[0].x) / 2
                let corney_island_bottom_tray__part_0_y = corney_island_bottom_tray__part_0_bounds[0].y + (corney_island_bottom_tray__part_0_bounds[1].y - corney_island_bottom_tray__part_0_bounds[0].y) / 2
                corney_island_bottom_tray__part_0 = translate([-corney_island_bottom_tray__part_0_x, -corney_island_bottom_tray__part_0_y, 0], corney_island_bottom_tray__part_0);
                corney_island_bottom_tray__part_0 = rotate([0,0,0], corney_island_bottom_tray__part_0);
                corney_island_bottom_tray__part_0 = translate([corney_island_bottom_tray__part_0_x, corney_island_bottom_tray__part_0_y, 0], corney_island_bottom_tray__part_0);

                corney_island_bottom_tray__part_0 = translate([-75,0,0], corney_island_bottom_tray__part_0);
                let result = corney_island_bottom_tray__part_0;
                
            

                // creating part 1 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_1_bounds = corney_island_bottom_tray__part_1.getBounds();
                let corney_island_bottom_tray__part_1_x = corney_island_bottom_tray__part_1_bounds[0].x + (corney_island_bottom_tray__part_1_bounds[1].x - corney_island_bottom_tray__part_1_bounds[0].x) / 2
                let corney_island_bottom_tray__part_1_y = corney_island_bottom_tray__part_1_bounds[0].y + (corney_island_bottom_tray__part_1_bounds[1].y - corney_island_bottom_tray__part_1_bounds[0].y) / 2
                corney_island_bottom_tray__part_1 = translate([-corney_island_bottom_tray__part_1_x, -corney_island_bottom_tray__part_1_y, 0], corney_island_bottom_tray__part_1);
                corney_island_bottom_tray__part_1 = rotate([0,0,0], corney_island_bottom_tray__part_1);
                corney_island_bottom_tray__part_1 = translate([corney_island_bottom_tray__part_1_x, corney_island_bottom_tray__part_1_y, 0], corney_island_bottom_tray__part_1);

                corney_island_bottom_tray__part_1 = translate([-75,0,1], corney_island_bottom_tray__part_1);
                result = result.subtract(corney_island_bottom_tray__part_1);
                
            

                // creating part 2 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_2 = _bottom_case_pinky_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_2_bounds = corney_island_bottom_tray__part_2.getBounds();
                let corney_island_bottom_tray__part_2_x = corney_island_bottom_tray__part_2_bounds[0].x + (corney_island_bottom_tray__part_2_bounds[1].x - corney_island_bottom_tray__part_2_bounds[0].x) / 2
                let corney_island_bottom_tray__part_2_y = corney_island_bottom_tray__part_2_bounds[0].y + (corney_island_bottom_tray__part_2_bounds[1].y - corney_island_bottom_tray__part_2_bounds[0].y) / 2
                corney_island_bottom_tray__part_2 = translate([-corney_island_bottom_tray__part_2_x, -corney_island_bottom_tray__part_2_y, 0], corney_island_bottom_tray__part_2);
                corney_island_bottom_tray__part_2 = rotate([0,0,0], corney_island_bottom_tray__part_2);
                corney_island_bottom_tray__part_2 = translate([corney_island_bottom_tray__part_2_x, corney_island_bottom_tray__part_2_y, 0], corney_island_bottom_tray__part_2);

                corney_island_bottom_tray__part_2 = translate([-75,0,0], corney_island_bottom_tray__part_2);
                result = result.union(corney_island_bottom_tray__part_2);
                
            

                // creating part 3 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_3_bounds = corney_island_bottom_tray__part_3.getBounds();
                let corney_island_bottom_tray__part_3_x = corney_island_bottom_tray__part_3_bounds[0].x + (corney_island_bottom_tray__part_3_bounds[1].x - corney_island_bottom_tray__part_3_bounds[0].x) / 2
                let corney_island_bottom_tray__part_3_y = corney_island_bottom_tray__part_3_bounds[0].y + (corney_island_bottom_tray__part_3_bounds[1].y - corney_island_bottom_tray__part_3_bounds[0].y) / 2
                corney_island_bottom_tray__part_3 = translate([-corney_island_bottom_tray__part_3_x, -corney_island_bottom_tray__part_3_y, 0], corney_island_bottom_tray__part_3);
                corney_island_bottom_tray__part_3 = rotate([0,0,0], corney_island_bottom_tray__part_3);
                corney_island_bottom_tray__part_3 = translate([corney_island_bottom_tray__part_3_x, corney_island_bottom_tray__part_3_y, 0], corney_island_bottom_tray__part_3);

                corney_island_bottom_tray__part_3 = translate([-75,0,0], corney_island_bottom_tray__part_3);
                result = result.subtract(corney_island_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return corney_island_bottom_tray_case_fn();
            }

        