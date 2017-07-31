/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CalendarD3 from './CalendarD3'
import Dimensions from 'react-dimensions'

class ResponsiveCalendarD3 extends Component {
    render() {
        const { containerWidth, containerHeight } = this.props

        return (
            <CalendarD3
                width={containerWidth}
                height={containerHeight}
                {...this.props}
            />
        )
    }
}

export default Dimensions()(ResponsiveCalendarD3)
