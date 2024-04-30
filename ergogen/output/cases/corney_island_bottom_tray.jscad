function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.632,-109.2400516],[89.63,-52.9900516]]).appendPoint([89.6299666,-52.0510039]).appendArc([90.1241513,-51.5510199],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([108.1358154,-51.3415159]).appendArc([108.63,-50.8415497],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.63,-40.0732444]).appendArc([109.1282895,-39.5732473],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1317105,-39.5116567]).appendArc([127.63,-39.0116596],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-35.253]).appendArc([128.13,-34.753],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.032,-34.753]).appendArc([148.532,-35.253],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.532,-40.025926]).appendArc([149.0266056,-40.5258969],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.0373944,-40.7202238]).appendArc([167.532,-41.2201947],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-42.6785306]).appendArc([168.0394992,-43.1784744],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.0240727,-42.9087058]).appendArc([186.5315718,-43.4084276],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.5319999,-44.3723561]).appendPoint([186.5321344,-44.675222]).appendArc([187.0321344,-45.175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.783,-45.175]).appendArc([207.283,-45.675],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([207.283,-107.4745263]).appendPoint([206.7486139,-108.4001101]).appendPoint([192.4308229,-129.6516873]).appendArc([191.7661541,-129.8053259],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([175.649264,-120.500235]).appendArc([175.463889,-120.4374417],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.1421269,-115.5727985]).appendPoint([127.6181655,-110.521886]).appendArc([127.3988279,-110.4726664],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.1350265,-110.6956937]).appendArc([89.632034,-110.1957205],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-109.2400516]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.832,-109.2400089],[90.83,-52.9900089]]).appendPoint([90.8299912,-52.7428911]).appendPoint([109.3358154,-52.5276391]).appendArc([109.83,-52.0276729],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.83,-40.7708538]).appendPoint([128.3317105,-40.7075585]).appendArc([128.83,-40.2075614],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.83,-35.953]).appendPoint([147.332,-35.953]).appendPoint([147.332,-41.2130485]).appendArc([147.8266056,-41.7130194],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.332,-41.9126828]).appendPoint([166.332,-43.8966656]).appendArc([166.8394992,-44.3966094],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.3318873,-44.1192236]).appendPoint([185.332,-44.372889]).appendPoint([185.3326671,-45.875222]).appendArc([185.8326671,-46.375],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.083,-46.375]).appendPoint([206.083,-107.1529873]).appendPoint([205.7301189,-107.7641954]).appendPoint([205.7252093,-107.7714684]).appendPoint([191.9309981,-128.2459077]).appendPoint([191.8005429,-128.4395396]).appendPoint([176.0418526,-119.3412555]).appendArc([175.8564776,-119.2784622],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.4879529,-114.4077239]).appendPoint([127.8878144,-109.3202507]).appendArc([127.6684768,-109.271031],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.8320089,-109.4915007]).appendPoint([90.832,-109.2400089]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[191.779,-74.71],[199.779,-74.71]]).appendPoint([199.779,-31.81]).appendPoint([191.779,-31.81]).appendPoint([191.779,-74.71]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_pinky_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.632,-109.2400516],[89.63,-52.9900516]]).appendPoint([89.6299666,-52.0510039]).appendArc([90.1241513,-51.5510199],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([108.1358154,-51.3415159]).appendArc([108.63,-50.8415497],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.63,-40.0732444]).appendArc([109.1282895,-39.5732473],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1317105,-39.5116567]).appendArc([127.63,-39.0116596],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-35.253]).appendArc([128.13,-34.753],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.032,-34.753]).appendArc([148.532,-35.253],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.532,-40.025926]).appendArc([149.0266056,-40.5258969],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.0373944,-40.7202238]).appendArc([167.532,-41.2201947],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-42.6785306]).appendArc([168.0394992,-43.1784744],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.0240727,-42.9087058]).appendArc([186.5315718,-43.4084276],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.5319999,-44.3723561]).appendPoint([186.5321344,-44.675222]).appendArc([187.0321344,-45.175],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.783,-45.175]).appendArc([207.283,-45.675],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([207.283,-107.4745263]).appendPoint([206.7486139,-108.4001101]).appendPoint([192.4308229,-129.6516873]).appendArc([191.7661541,-129.8053259],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([175.649264,-120.500235]).appendArc([175.463889,-120.4374417],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.1421269,-115.5727985]).appendPoint([127.6181655,-110.521886]).appendArc([127.3988279,-110.4726664],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.1350265,-110.6956937]).appendArc([89.632034,-110.1957205],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-109.2400516]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[180.2410516,-105.5386576],"radius":1.1})
.union(
    CAG.circle({"center":[133.657,-97.955],"radius":1.1})
).union(
    CAG.circle({"center":[166.468,-61.621],"radius":1.1})
).union(
    CAG.circle({"center":[90.5,-90.5],"radius":1.1})
).union(
    CAG.circle({"center":[90.5,-71.5],"radius":1.1})
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

        