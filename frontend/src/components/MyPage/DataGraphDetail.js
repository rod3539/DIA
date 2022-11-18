import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import styles from './DataGraphDetail.module.css';
import { Hidden } from '@mui/material';
import { display } from '@mui/system';

function DataGraphDetail({data}) {
  return (
    <div className={styles.body}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 150, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '0',
            max: '130',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ability',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'status',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={0}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: 170,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        theme={{
            textColor: '#ffffff' ,
            fontSize: 11,
            axis: {
              domain: {
                line: {
                  stroke: '#dddddd',
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: '#ffffff',
                },
              },
              ticks: {
                line: {
                  stroke: '#777777',
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 15,
                },
              },
            },
            tooltip: {
              container: {
                background: '#ffffff',
                color: '#333333',
                fontSize: 16,
              },
            },
          }}
    />
    </div>
  );
}

export default DataGraphDetail;