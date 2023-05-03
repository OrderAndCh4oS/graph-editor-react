# Graph Editor

## Overview

Graph Editor is an application for constructing complex, interconnected graph models representing real-world systems. This versatile application offers a streamlined experience for portraying intricate relationships between diverse elements.

Graphs consist of two node types: value nodes containing numerical values, and equation nodes executing mathematical operations on input nodes. The outputs of these calculations can subsequently serve as input for additional equation nodes.

![graph-editor orderandchaos xyz](https://user-images.githubusercontent.com/1910955/205188521-7a1af435-ca17-4036-a415-9ccc30782f4d.png)

## Features

### Value Nodes

Value Nodes store numeric values, which can be used in Equation Node formulas. They offer multiple customization options, allowing users to tailor them according to their requirements:

- **ID**: A unique identifier for the node.

- **Label**: A short name displayed on the node within the graph.

- **Title**: A longer name shown alongside calculated values.

- **Colour**: The colour of the node in the graph.

- **Conversion**: Input values can be multiplied by this amount (_eg_, a value of 10 with a conversion factor of 0.1 will result in a final value of 1).

- **Prefix**: Displayed before the value (_eg_, "£" might be used for currency).

- **Suffix**: Displayed after the value (_eg_, "b" might represent billions).

- **Value**: Actual numeric value stored by Value Node.

- **Min**, **Max**, and **step** fields allow you to define constraints or increment/decrement steps associated with an input field.

### Equation Nodes

Equation Nodes perform mathematical operations on input nodes, displaying those results which may subsequently serve as inputs for other Equation Node formulas:

- **ID**: A unique identifier for this equation node.

- **Label**: Brief title displayed within node in diagram form.

- **Title**: Longer form name shown with calculation results.

- **Colour**: The colour of the node in the graph.

- **Conversion**: numeric equivalent multiplier as outlined above within 'Value Nodes' subsection;

- **Prefix/Suffix**: affixed symbols to be situated either side of data (_ie_ such as sterling, dollar or euro signs);

- **Equation**: The formula field containing mathematical relations of nodes _eg_ `{node_a_id}*{node_b_id}`.

