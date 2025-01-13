import React, { useState } from 'react';
import { DimensionValue, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

import { Colors } from '@/constants/Colors';
import { ListItemType } from '@/types';

import Ionicons from '@expo/vector-icons/Ionicons';

type SelectProps = TextInputProps & {
  list: string[] | ListItemType[];
  onSelect: (e: string | number | undefined) => void;
  required?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
};

export const SelectNotForm: React.FC<SelectProps> = ({
  mode = 'outlined',
  value,
  onSelect,
  list,
  label,
  width = '100%',
  height = 56,
  required = false,
  outlineColor = Colors.primary.default,
  activeOutlineColor = Colors.primary.dark,
  style,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<
    string | ListItemType | undefined
  >(
    list.find(i =>
      typeof i === 'string'
        ? i
        : typeof i === 'object'
          ? i.id === value
          : undefined
    )
  );
  const [showSelectMenu, setShowSelectMenu] = useState<boolean>(false);

  return (
    <View
      style={{
        width: width,
      }}
    >
      <TextInput
        mode={mode}
        value={
          typeof inputValue === 'string'
            ? inputValue
            : typeof inputValue === 'object'
              ? inputValue.name
              : undefined
        }
        style={[
          {
            width: width,
            height: height,
          },
          style,
        ]}
        contentStyle={{
          paddingLeft: 8,
        }}
        outlineColor={outlineColor}
        activeOutlineColor={activeOutlineColor}
        onBlur={() => setShowSelectMenu(false)}
        caretHidden={true}
        showSoftInputOnFocus={false}
        {...rest}
      />
      <TouchableOpacity
        className={`w-8 h-full absolute justify-center right-0`}
        onPress={() => setShowSelectMenu(state => !state)}
      >
        <View>
          {showSelectMenu ? (
            <Ionicons
              name="chevron-up-outline"
              size={24}
              color={Colors.gray.default}
            />
          ) : (
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={Colors.gray.default}
            />
          )}
        </View>
      </TouchableOpacity>

      {showSelectMenu && (
        <View
          className="min-w-full absolute z-10 bg-gray-300"
          style={{ top: height }}
        >
          {list.length > 0 ? (
            list.map(item => (
              <TouchableOpacity
                className="px-3 py-1 bg-green-50 border-b border-b-green-100"
                activeOpacity={0.7}
                key={
                  typeof item === 'string'
                    ? item
                    : typeof item === 'object'
                      ? item.id
                      : null
                }
                onPress={() => {
                  onSelect(
                    typeof item === 'string'
                      ? item
                      : typeof item === 'object' && item.name
                        ? item.name
                        : typeof item === 'object' && item.description
                          ? item.description
                          : undefined
                  );
                  setInputValue(item);
                  setShowSelectMenu(false);
                }}
              >
                <Text className="text-3xl">
                  {typeof item === 'string'
                    ? item
                    : typeof item === 'object' && item.name
                      ? item.name
                      : typeof item === 'object' && item.description
                        ? item.description
                        : undefined}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text>List is empty</Text>
          )}
        </View>
      )}
    </View>
  );
};
